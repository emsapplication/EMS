using EMS.BusinessLogicLayer.Operations;
using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;

namespace EMS.ApiService.Controllers
{
    public class ImportResourceDetailController : ApiController
    {
        private readonly IImportRecordBL _iImportRecordBL;
        public ImportResourceDetailController(IImportRecordBL iImportRecordBL)
        {
            this._iImportRecordBL = iImportRecordBL;
        }

        // POST api/values
        public int Post(dynamic value)
        {
           
            Example tmp = JsonConvert.DeserializeObject<Example>(value);

            var v = ((Newtonsoft.Json.Linq.JObject)((Newtonsoft.Json.Linq.JContainer)tmp.payload).First);
            var dict = JsonConvert.DeserializeObject<Dictionary<string, object>>(v.ToString());

            var val = (from o in dict
                            where o.Key.Contains("AJ")
                            select o.Key).Last();

            //var val = dict.Keys.Last();

            int lastValue = Convert.ToInt32(Regex.Match(val, @"\d+").Value);


            List<StageResourecDetailBO> oResourSeDetail = new List<StageResourecDetailBO>();


            for (int i = 2; i <= lastValue; i++)
            {
                string ResourceID = dict.ContainsKey("A" + i) ? JsonConvert.DeserializeObject<A>(dict["A"+i].ToString()).w : "";
                string ResourceName = dict.ContainsKey("B" + i) ? JsonConvert.DeserializeObject<A>(dict["B" + i].ToString()).w : "";
                string DOJ = dict.ContainsKey("C" + i) ? JsonConvert.DeserializeObject<A>(dict["C" + i].ToString()).w : "";
                string Designation = dict.ContainsKey("D" + i) ? JsonConvert.DeserializeObject<A>(dict["D" + i].ToString()).w : "";
                string ShortDesignation = dict.ContainsKey("E" + i) ? JsonConvert.DeserializeObject<A>(dict["E" + i].ToString()).w : "";
                string TGGroup = dict.ContainsKey("F" + i) ? JsonConvert.DeserializeObject<A>(dict["F" + i].ToString()).w : "";
                string CGIExp = dict.ContainsKey("G" + i) ? JsonConvert.DeserializeObject<A>(dict["G" + i].ToString()).w : "";
                string PrevExp = dict.ContainsKey("H" + i) ? JsonConvert.DeserializeObject<A>(dict["H" + i].ToString()).w : "";
                string TotalExp = dict.ContainsKey("I" + i) ? JsonConvert.DeserializeObject<A>(dict["I" + i].ToString()).w : "";
                string MemberType = dict.ContainsKey("J" + i) ? JsonConvert.DeserializeObject<A>(dict["J" + i].ToString()).w : "";
                string Location = dict.ContainsKey("K" + i) ? JsonConvert.DeserializeObject<A>(dict["K" + i].ToString()).w : "";
                string Skillsfamily = dict.ContainsKey("L" + i) ? JsonConvert.DeserializeObject<A>(dict["L" + i].ToString()).w : "";
                string Competency = dict.ContainsKey("M" + i) ? JsonConvert.DeserializeObject<A>(dict["M" + i].ToString()).w : "";
                string Subcompetency = dict.ContainsKey("N" + i) ? JsonConvert.DeserializeObject<A>(dict["N" + i].ToString()).w : "";
                string SkillCategory = dict.ContainsKey("O" + i) ? JsonConvert.DeserializeObject<A>(dict["O" + i].ToString()).w : "";
                string HRBU = dict.ContainsKey("P" + i) ? JsonConvert.DeserializeObject<A>(dict["P" + i].ToString()).w : "";
                string ProjectID = dict.ContainsKey("Q" + i) ? JsonConvert.DeserializeObject<A>(dict["Q" + i].ToString()).w : "";
                string ProjectDescription = dict.ContainsKey("R" + i) ? JsonConvert.DeserializeObject<A>(dict["R" + i].ToString()).w : "";
                string PCBU = dict.ContainsKey("S" + i) ? JsonConvert.DeserializeObject<A>(dict["S" + i].ToString()).w : "";
                string AssignmentStartDt = dict.ContainsKey("T" + i) ? JsonConvert.DeserializeObject<A>(dict["T" + i].ToString()).w : "";
                string AssignmentEndDt = dict.ContainsKey("U" + i) ? JsonConvert.DeserializeObject<A>(dict["U" + i].ToString()).w : "";
             // string HoursPerDay = dict.ContainsKey("U" + i) ? JsonConvert.DeserializeObject<A>(dict["U" + i].ToString()).w : "";
                string HoursPerDay = dict.ContainsKey("V" + i) ? JsonConvert.DeserializeObject<A>(dict["V" + i].ToString()).w : "";
                string ProjectRole = dict.ContainsKey("W" + i) ? JsonConvert.DeserializeObject<A>(dict["W" + i].ToString()).w : "";
                string employee_status = dict.ContainsKey("X" + i) ? JsonConvert.DeserializeObject<A>(dict["X" + i].ToString()).w : "";
                string ReleaseMonth = dict.ContainsKey("Y" + i) ? JsonConvert.DeserializeObject<A>(dict["Y" + i].ToString()).w : "";
                string ReportingManager = dict.ContainsKey("Z" + i) ? JsonConvert.DeserializeObject<A>(dict["Z" + i].ToString()).w : "";
                string PMName = dict.ContainsKey("AA" + i) ? JsonConvert.DeserializeObject<A>(dict["AA" + i].ToString()).w : "";
                string SPMName = dict.ContainsKey("AB" + i) ? JsonConvert.DeserializeObject<A>(dict["AB" + i].ToString()).w : "";
                string EDName = dict.ContainsKey("AC" + i) ? JsonConvert.DeserializeObject<A>(dict["AC" + i].ToString()).w : "";
                string GHName = dict.ContainsKey("AD" + i) ? JsonConvert.DeserializeObject<A>(dict["AD" + i].ToString()).w : "";
                string GLName = dict.ContainsKey("AE" + i) ? JsonConvert.DeserializeObject<A>(dict["AE" + i].ToString()).w : "";
                string SGLName = dict.ContainsKey("AF" + i) ? JsonConvert.DeserializeObject<A>(dict["AF" + i].ToString()).w : "";
                string PyramidAccount = dict.ContainsKey("AG" + i) ? JsonConvert.DeserializeObject<A>(dict["AG" + i].ToString()).w : "";
                string RMBU = dict.ContainsKey("AH" + i) ? JsonConvert.DeserializeObject<A>(dict["AH" + i].ToString()).w : "";
                string HR_BU = dict.ContainsKey("AI" + i) ? JsonConvert.DeserializeObject<A>(dict["AI" + i].ToString()).w : "";
                string DeptID = dict.ContainsKey("AJ" + i) ? JsonConvert.DeserializeObject<A>(dict["AJ" + i].ToString()).w : "";


                oResourSeDetail.Add(new StageResourecDetailBO { ResourceID = ResourceID,
                    ResourceName = ResourceName,
                    DOJ = DOJ,
                    Designation = Designation,
                    ShortDesignation = ShortDesignation,
                    TGGroup = TGGroup,
                    CGIExp = CGIExp,
                    PrevExp = PrevExp,
                    TotalExp = TotalExp,
                    MemberType = MemberType,
                    Location = Location,
                    Skillsfamily = Skillsfamily,
                    Competency = Competency,
                    Subcompetency = Subcompetency,
                    SkillCategory = SkillCategory,
                    HRBU = HRBU,
                    ProjectID = ProjectID,
                    ProjectDescription = ProjectDescription,
                    PCBU = PCBU,
                    AssignmentStartDt = AssignmentStartDt,
                    HoursPerDay = HoursPerDay,
                    ProjectRole = ProjectRole,
                    employee_status = employee_status,
                    ReleaseMonth = ReleaseMonth,
                    ReportingManager = ReportingManager,
                    PMName = PMName,
                    SPMName = SPMName,
                    EDName = EDName,
                    GHName = GHName,
                    GLName = GLName,
                    SGLName = SGLName,
                    PyramidAccount = PyramidAccount,
                    RMBU = RMBU,
                    HR_BU = HR_BU,
                    DeptID = DeptID
                });

            }

           int isSuccess = _iImportRecordBL.LoadResourceData(oResourSeDetail);
            return isSuccess;
        }

        public class Example
        {
            public string result { get; set; }
            public object payload { get; set; }
        }

        public class Payload
        {
            public object a { get; set; }
        }


        public class A
        {
            public string v { get; set; }
            public int ixfe { get; set; }
            public string t { get; set; }
            public string w { get; set; }
        }
    }
}
