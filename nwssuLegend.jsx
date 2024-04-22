import React, { useState } from "react";
import { Button, Modal } from "antd";
const NwssuLegend = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button
        type="primary"
        size="large"
        onClick={showModal}
        style={{ left: 315, top: 670 }}
      >
        MAP LEGEND
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        style={{ right: 200, top: 40 }}
      >
        <div style={{ height: "85vh", overflow: "auto" }}>
          <div className="text-center font-black text-lg mb-3">MAP LEGEND</div>
          <div>
            <div className="font-bold text-lg">SEARCH NAMES AND ALIASES</div>
            <div className="flex flex-row space-x-2">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                A
              </div>
              <div className="font-bold text-lg">
                COED - COLLEGE OF EDUCATION
              </div>
            </div>
            <div className="ml-8"> - CoED Dean's Office @Ground Floor</div>
            <div className="ml-8"> - Factulty Office @Ground Floor</div>
            <div className="flex flex-row space-x-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                B
              </div>
              <div className="font-bold text-lg">BUSINESS STALLS</div>
            </div>
            <div className="flex flex-row space-x-1 mt-1 ">
              <div className="bg-black text-white w-8 h-6 text-center rounded-full mt-1 ">
                C
              </div>
              <div className="font-bold text-lg">
                CCIS - COLLEGE OF COMPUTING AND INFORMATION SCIENCES (NEW)
              </div>
            </div>
            <div className="ml-8"> - CCIS Dean's Office @Ground Floor</div>
            <div className="ml-8"> - Faculty Office @ Ground Floor</div>
            <div className="ml-8"> - MIS Office @ Ground Floor</div>
            <div className="flex flex-row space-x-1 mt-1">
              <div className="bg-black text-white w-10 h-6 text-center rounded-full mt-1">
                D
              </div>
              <div className="font-bold text-lg">
                REGISTRAR - COLLEGE OF COMPUTING AND INFORMATION SCIENCES (OLD)
              </div>
            </div>
            <div className="ml-8"> - Registrar's Office @ Ground Floor</div>
            <div className="ml-8">
              {" "}
              - External Affairs Office @ Ground Floor
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                E
              </div>
              <div className="font-bold text-lg">
                RESEARCH - RESEARCH AND EXTENSION BUILDING
              </div>
            </div>
            <div className="ml-8"> - Office of the VP for REEA @ 2nd Floor</div>
            <div className="ml-8"> - REEA Office @ 2nd Floor</div>
            <div className="ml-8"> - Food Court @ Ground Floor</div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                F
              </div>
              <div className="font-bold text-lg">
                SOCIO - RSU-SOCIO CULTURAL CENTER
              </div>
            </div>
            <div className="ml-8">
              {" "}
              - PESO, Alumni & FANWSSU Offices & Mezannine{" "}
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                G
              </div>
              <div className="font-bold text-lg">
                {" "}
                LIBRARY - UNIVERSITY LIBRARY
              </div>
            </div>
            <div className="ml-8">
              {" "}
              - Internet Lab. & Graduate Library @ Ground Floor
            </div>
            <div className="ml-8">
              {" "}
              - COA Office & College Library @ 2nd Floor
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                H
              </div>
              <div className="font-bold text-lg">
                {" "}
                BDC - BUSINESS DEVELOPMENT CENTER{" "}
              </div>
            </div>
            <div className="ml-8"> - IGP Office @ Ground</div>
            <div className="ml-8"> - Floor NWSSU AVR @ 2nd Floor</div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                I
              </div>
              <div className="font-bold text-lg">
                {" "}
                CEA - COLLEGE OF ENGINEERING AND ARCHITECTURE
              </div>
            </div>
            <div className="ml-8"> - CEA Dean's Office @ 2nd Floor</div>
            <div className="ml-8"> - Faculty Office @ 2nd Floor</div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                J
              </div>
              <div className="font-bold text-lg">
                {" "}
                ASCA - ARTS, SOCIAL AND CULTURAL AFFAIRS BUILDING{" "}
              </div>
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                K
              </div>
              <div className="font-bold text-lg">
                {" "}
                TECHNOLOGICAL - TECHNOLOGICAL COMPLEX BUILDING
              </div>
            </div>
            <div className="ml-8"> - Infra-Dev't Office @ 2nd Floor </div>
            <div className="ml-8">
              {" "}
              - Repair and Maintenance Office @ Ground Floor
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                L
              </div>
              <div className="font-bold text-lg">
                {" "}
                AGRITOUR - AGRI-TOURISM BUILDING
              </div>
            </div>
            <div className="ml-8"> - COM Dean's Office </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                M
              </div>
              <div className="font-bold text-lg">
                {" "}
                CLB - COMPUTER LABORATORY BUILDING
              </div>
            </div>
            <div className="ml-8"> - COM Faculty Office @ 2nd Floor </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                N
              </div>
              <div className="font-bold text-lg">
                AGRITECH - AGRI-TECHNOLOGY BUILDING
              </div>
            </div>
            <div className="ml-8"> - Motorpool @ Ground Floor </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                O
              </div>
              <div className="font-bold text-lg">
                {" "}
                COM - COLLEGE OF MANAGEMENT
              </div>
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                P
              </div>
              <div className="font-bold text-lg">
                {" "}
                HOTEL - UNIVERSITY HOTEL AND RESTAURANT BUILDING
              </div>
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                Q
              </div>
              <div className="font-bold text-lg">
                ADMIN - ADMINISTRATION BUILDING
              </div>
            </div>
            <div className="ml-8">
              {" "}
              - Records, COOP & Cashier Office @ Ground Floor
            </div>
            <div className="ml-8">
              {" "}
              - Office of the VP for Administrative Affairs @ 2nd Floor
            </div>
            <div className="ml-8">
              {" "}
              - Quality Assurance, Procurement & Accounting Offices @ 2nd Floor{" "}
            </div>
            <div className="ml-8">
              - Planning, Internal Audit & Board Secretary Offices @ 2nd Floor
            </div>
            <div className="ml-8">
              {" "}
              - HRMO, Accounting & Budget Offices @ 3rd Floor{" "}
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                R
              </div>
              <div className="font-bold text-lg">
                {" "}
                PRESIDENT - OFFICE OF THE UNIVERSITY PRESIDENT
              </div>
            </div>
            <div className="ml-8">
              {" "}
              - Office of the University President @ 2nd Floor{" "}
            </div>{" "}
            <div className="ml-8"> - Supply Office @ Ground Floor</div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                S
              </div>
              <div className="font-bold text-lg">
                {" "}
                SAS - STUDENTS AFFAIRS SERVICES BUILDING
              </div>
            </div>
            <div className="ml-8"> - University Gym @ 4th Floor</div>
            <div className="ml-8"> - Publications Office @ 3rd Floor</div>
            <div className="ml-8"> - SAS & Admission Office @ 2nd Floor </div>
            <div className="ml-8">
              - SSG, Medical & Dental Services Offices @ Ground Floor
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-7 h-6 text-center rounded-full mt-1 ">
                T
              </div>
              <div className="font-bold text-lg">
                CAT - COLLEGE OF AGRICULTURE & TECHNOLOGY BUILDING
              </div>
            </div>
            <div className="ml-8">
              {" "}
              - Guidance & Testing Offices @ Ground Floor
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-7 h-6 text-center rounded-full mt-1 ">
                U
              </div>
              <div className="font-bold text-lg">
                CCJS - COLLEGE OF CRIMINAL JUSTICE ADN SCIENCES BUILDING
              </div>
            </div>
            <div className="ml-8"> - CCJS Dean's Office @ Ground Floor</div>
            <div className="ml-8"> - Faculty Office @ Ground Floor </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                V
              </div>
              <div className="font-bold text-lg"> POWER - POWER HOUSE</div>
            </div>
            <div className="flex flex-row space-x-2 mt-1">
              <div className="bg-black text-white w-6 h-6 text-center rounded-full mt-1 ">
                W
              </div>
              <div className="font-bold text-lg"> BALAY - BALAY ALUMNI</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default NwssuLegend;
