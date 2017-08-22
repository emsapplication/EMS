using EMS.DataAccessLayer.ServiceContract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EMS.BusinessObjects;
using EMSEntity = EMS.DataAccessLayer.DataEntityModel;
using System.Data.Entity.Validation;

namespace EMS.DataAccessLayer.Operations
{
    public class ImportRecordDA : IImportRecordDA
    {
        public int ImportResourceData()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.Competency oData = new EMSEntity.Competency();
                //oData.Competency1 = obj.Competency;
                //oData.CreatedBy = obj.CreatedBy;
                //oData.CreatedDate = DateTime.Now;

                objEF.Competencies.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteExistRecords()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                List<EMSEntity.stg_ResourceDetail> oSelect = objEF.stg_ResourceDetail.Where(i => i.ResourceID.Length > 1).ToList();
                objEF.stg_ResourceDetail.RemoveRange(oSelect);

                return objEF.SaveChanges();
            }
        }

        public int LoadResourceData(List<StageResourecDetailBO> resorceDetail)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                try
                {
                    EMSEntity.Competency oData = new EMSEntity.Competency();
                    List<EMSEntity.stg_ResourceDetail> stgResource = new List<EMSEntity.stg_ResourceDetail>();
                    foreach (var v in resorceDetail)
                    {
                        stgResource.Add(new EMSEntity.stg_ResourceDetail
                        {
                            ResourceID = v.ResourceID,
                            ResourceName = v.ResourceName,
                            DOJ = v.DOJ,
                            Designation = v.Designation,
                            ShortDesignation = v.ShortDesignation,
                            TGGroup = v.TGGroup,
                            CGIExp = v.CGIExp,
                            PrevExp = v.PrevExp,
                            TotalExp = v.TotalExp,
                            MemberType = v.MemberType,
                            Location = v.Location,
                            Skillsfamily = v.Skillsfamily,
                            Competency = v.Competency,
                            Subcompetency = v.Subcompetency,
                            SkillCategory = v.SkillCategory,
                            HRBU = v.HRBU,
                            ProjectID = v.ProjectID,
                            ProjectDescription = v.ProjectDescription,
                            PCBU = v.PCBU,
                            AssignmentStartDt = v.AssignmentStartDt,
                            HoursPerDay = v.HoursPerDay,
                            ProjectRole = v.ProjectRole,
                            employee_status = v.employee_status,
                            ReleaseMonth = v.ReleaseMonth,
                            ReportingManager = v.ReportingManager,
                            PMName = v.PMName,
                            SPMName = v.SPMName,
                            EDName = v.EDName,
                            GHName = v.GHName,
                            GLName = v.GLName,
                            SGLName = v.SGLName,
                            PyramidAccount = v.PyramidAccount,
                            RMBU = v.RMBU,
                            HR_BU = v.HR_BU,
                            DeptID = v.DeptID
                        });


                    }

                    objEF.stg_ResourceDetail.AddRange(stgResource);

                    return objEF.SaveChanges();
                }
                catch (DbEntityValidationException e)
                {
                    foreach (var eve in e.EntityValidationErrors)
                    {
                        Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                            eve.Entry.Entity.GetType().Name, eve.Entry.State);
                        foreach (var ve in eve.ValidationErrors)
                        {
                            Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                                ve.PropertyName, ve.ErrorMessage);
                        }
                    }
                    throw;
                }
            }
        }
    }
}
