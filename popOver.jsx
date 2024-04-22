import { Button } from "antd";
import { useInfoContext } from "../context/infoContext";
import CcisLogo from "../assets/CcisLogo.png";
import ComLogo from "../assets/ComLogo.png";
import CoedLogo from "../assets/CoedLogo.png";
import CatLogo from "../assets/CatLogo.png";
import CeaLogo from "../assets/CeaLogo.png";
import CcjsLogo from "../assets/CcjsLogo.png";

const PopoverComponent = ({
  showPopover,
  popoverPosition,
  endNode,
  handleButtonClick,
}) => {
  const { getBuildingName } = useInfoContext();

  return (
    showPopover && (
      <div
        className="flex flex-col justify-center items-center absolute w-96 h-36 bg-green-200 border-solid rounded-lg px-2 space-y-2"
        style={{ top: popoverPosition.y, left: popoverPosition.x }}
      >
        <div className="flex flex-row justify-center items-center space-x-2 ">
          <div>
            {(endNode === "CCIS" ||
              endNode === "COLLEGE OF COMPUTING AND INFORMATION SCIENCES" ||
              endNode === "CCIS FACULTY OFFICE" ||
              endNode === "MIS" ||
              endNode === "CCIS DEANS OFFICE") && (
              <div>
                <img src={CcisLogo} alt="CCIS Logo" className="w-16 h-16" />
              </div>
            )}

            {(endNode === "COM" ||
              endNode === "COLLEGE OF MANAGEMENT" ||
              endNode === "COM FACULTY OFFICE" ||
              endNode === "COM DEANS OFFICE") && (
              <img src={ComLogo} alt="COM Logo" className="w-16 h-16 " />
            )}
            {(endNode === "COED" ||
              endNode === "COLLEGE OF EDUCATION" ||
              endNode === "COED FACULTY OFFICE" ||
              endNode === "COED DEANS OFFICE") && (
              <img src={CoedLogo} alt="COED Logo" className="w-16 h-16 " />
            )}
            {(endNode === "CAT" ||
              endNode === "COLLEGE OF AGRICULTURE TECHNOLOGY" ||
              endNode === "CAT FACULTY OFFICE" ||
              endNode === "CAT DEANS OFFICE") && (
              <img src={CatLogo} alt="CAT Logo" className="w-16 h-16 " />
            )}
            {(endNode === "CEA" ||
              endNode === "COLLEGE OF ENGINEERING AND ARCHITECTURE" ||
              endNode === "CEA FACULTY OFFICE" ||
              endNode === "CEA DEANS OFFICE") && (
              <img src={CeaLogo} alt="CEA Logo" className="w-16 h-16 " />
            )}
            {(endNode === "CCJS" ||
              endNode === "COLLEGE OF CRIMINAL JUSTICE AND SCIENCES" ||
              endNode === "CCJS FACULTY OFFICE" ||
              endNode === "CCJS DEANS OFFICE") && (
              <img src={CcjsLogo} alt="CCJS Logo" className="w-16 h-16 " />
            )}
          </div>

          <div>
            {getBuildingName.map(
              (building, index) =>
                index === 0 &&
                (endNode === "CCIS" ||
                  endNode === "COLLEGE OF COMPUTING AND INFORMATION SCIENCES" ||
                  endNode === "CCIS FACULTY OFFICE" ||
                  endNode === "MIS" ||
                  endNode === "CCIS DEANS OFFICE") && (
                  <div
                    key={index}
                    className=" flex items-center font-bold text-lg text-center"
                  >
                    <span>{building.buildingname}</span>
                    <p>44.40 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 1 &&
                (endNode === "COED" ||
                  endNode === "COLLEGE OF EDUCATION" ||
                  endNode === "COED FACULTY OFFICE" ||
                  endNode === "COED DEANS OFFICE") && (
                  <div
                    key={index}
                    className="flex items-center justify-center font-bold text-lg text-center"
                  >
                    <span>{building.buildingname}</span>
                    <p className="mt-5">139.4 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 2 &&
                (endNode === "CEA" ||
                  endNode === "COLLEGE OF ENGINEERING AND ARCHITECTURE" ||
                  endNode === "CEA FACULTY OFFICE" ||
                  endNode === "CEA DEANS OFFICE") && (
                  <div
                    key={index}
                    className="flex items-center font-bold text-lg text-center"
                  >
                    <span>{building.buildingname}</span>
                    <p className="mt-5">148.56 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 3 &&
                endNode === "COM" && (
                  <div
                    key={index}
                    className=" flex items-center font-bold text-lg text-center"
                  >
                    <span>{building.buildingname}</span>
                    <p>177.31 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 4 &&
                (endNode === "CAT" ||
                  endNode === "COLLEGE OF AGRICULTURE TECHNOLOGY" ||
                  endNode === "CAT FACULTY OFFICE" ||
                  endNode === "CAT DEANS OFFICE") && (
                  <div
                    key={index}
                    className="flex items-center font-bold text-lg"
                  >
                    <span>{building.buildingname}</span>
                    <p className="mt-4">158.32 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 5 &&
                (endNode === "RESEARCH" ||
                  endNode === "RESEARCH EXTENSION OFFICE" ||
                  endNode === "FOOD COURT" ||
                  endNode === "REEA OFFICE" ||
                  endNode === "VICE PRESIDENT FOR RESEARCH") && (
                  <div
                    key={index}
                    className="flex items-center font-bold text-lg text-center"
                  >
                    <span>{building.buildingname}</span>
                    <p className="mt-5">33.82 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 6 &&
                (endNode === "SOCIO" ||
                  endNode === "RSU SOCIO CULTURAL CENTER" ||
                  endNode === "PESO" ||
                  endNode === "RSU") && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span className="">{building.buildingname}</span>

                    <p>59.82 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 7 &&
                (endNode === "LIBRARY" ||
                  endNode === "UNIVERSITY LIBRARY" ||
                  endNode === "INTERNET LIBRARY" ||
                  endNode === "GRADUATE LIBRARY" ||
                  endNode === "COA OFFICE") && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p> 113.22 Meters </p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 8 &&
                (endNode === "BDC" ||
                  endNode === "BUSINESS DEVELOPMENT CENTER" ||
                  endNode === "IGP OFFICE" ||
                  endNode === "FLOOR NWSSU AVR") && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>144.92 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 9 &&
                endNode === "ASCA" && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>100.55 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 10 &&
                endNode === "TECHNOLOGICAL" && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>134.06 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 11 &&
                (endNode === "AGRITOUR" || endNode === "COM DEANS OFFICE") && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>178.09 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 12 &&
                (endNode === "CLB" || endNode === "COM FACULTY OFFICE") && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>188.11 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 13 &&
                (endNode === "AGRITECH" || endNode === "MOTORPOOL") && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>196.51 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 14 &&
                endNode === "HOTEL" && (
                  <div
                    key={index}
                    className=" flex items-center font-bold text-lg text-center"
                  >
                    <span>{building.buildingname}</span>
                    <p>130.32 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 15 &&
                (endNode === "ADMIN" ||
                  endNode === "ADMINISTRATION BUILDING" ||
                  endNode === "CASHIER" ||
                  endNode === "BUDJET OFFICE" ||
                  endNode === "HRMO" ||
                  endNode === "ACCOUNTING OFFICE" ||
                  endNode === "BOARD SECRETRARY OFFICE" ||
                  endNode === "COOP") && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>130.17 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 16 &&
                endNode === "PRESIDENT" && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>135.32 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 17 &&
                (endNode === "SAS" ||
                  endNode === "STUDENT AFFAIRS SERVICE" ||
                  endNode === "ADMISSION OFFICE" ||
                  endNode === "ISSC" ||
                  endNode === "UNIVERSITY CLINIC" ||
                  endNode === "UNIVERSITY GYM" ||
                  endNode === "VICE PRESIDENT OFFICE FOR ACADS") && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>147.32 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 18 &&
                (endNode === "POWER" || endNode === "POWER HOUSE") && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>125.57 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 19 &&
                endNode === "BALAY" && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                    <p>162.8 Meters</p>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 20 &&
                endNode === "STALL" && (
                  <div key={index} className="font-bold text-lg">
                    <span>{building.buildingname}</span>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 21 &&
                endNode === "REGISTRAR" && (
                  <div key={index} className="font-bold text-lg text-center">
                    <span>{building.buildingname}</span>
                  </div>
                )
            )}
            {getBuildingName.map(
              (building, index) =>
                index === 22 &&
                (endNode === "CCJS" ||
                  endNode === "COLLEGE OF CRIMINAL JUSTICE AND SCIENCES" ||
                  endNode === "CCJS FACULTY OFFICE" ||
                  endNode === "CCJS DEANS OFFICE") && (
                  <div key={index} className="font-bold text-lg">
                    <span>{building.buildingname}</span>
                    <p>92.70 Meters</p>
                  </div>
                )
            )}
          </div>
        </div>

        <div>
          <Button
            onClick={handleButtonClick}
            className="font-bold text-center"
            type="primary"
          >
            3D Building
          </Button>
        </div>
      </div>
    )
  );
};

export default PopoverComponent;
