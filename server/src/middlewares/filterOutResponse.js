'use strict';

const _ = require('lodash');

function getRawData(data) {
  if (Array.isArray(data)) {
    return data.map(item => {
      return item.get ? item.get({ plain: true }) : item;
    });
  }
  return data.get ? data.get({ plain: true }) : data;
}

module.exports = async(req, res, next) => {
  const response_body = _.get(res, 'response_body', {});
  const response_schema = _.get(res, 'response_schema', {});

  // Calling getRawData to obtain ONLY the raw data values.
  // There are cases when we'll receive of a Sequelize Object
  // or Array of Objects and therefore we need to normalize it.
  const response_body_raw = getRawData(response_body);

  try {
    console.log('Filtering Response...');
    const { value, error, debug } = await response_schema.validate(response_body_raw, {
      stripUnknown: {
        arrays: true,
        objects: true
      }
    });

    if (debug) {
      // Show all rules which fail, in case of .alternatives() usage the
      // failed rules will appear as errors, and extra care has to be taken.
      console.debug('=================================================');
      debug.filter(x => !!x.result && x.result !== 'pass').map(e => console.debug(e));
      console.debug('=================================================');
    }

    if (error) {
      console.error('response validation error:', error.details);
      next({
        statusCode: 400,
        message: error.details
      });
      return;
    }

    console.log('Filtering Response: Successfully!');
    res.send(value);
  } catch (err) {
    const filter_response_warning = 'filter-out-warning - there was an error in the filter out response';
    console.warn(filter_response_warning, err);
    next({
      statusCode: 400,
      message: filter_response_warning
    });
    return;
  }
};