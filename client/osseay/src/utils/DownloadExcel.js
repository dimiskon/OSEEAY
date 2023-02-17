import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const DownloadExcel = (props) => {
    return (
      <ExcelFile>
          <ExcelSheet data={dataSet1} name="Employees">
              <ExcelColumn label={Object.keys(0)} value={Object.values(0)}/>
              <ExcelColumn label="Wallet Money" value="amount"/>
              <ExcelColumn label="Gender" value="sex"/>
              <ExcelColumn label="Marital Status"
                           value={(col) => col.is_married ? "Married" : "Single"}/>
          </ExcelSheet>
      </ExcelFile>
    );
}

export default DownloadExcel;