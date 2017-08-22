using EMS.DataAccessLayer.ServiceContract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EMS.BusinessObjects;
using EMSEntity = EMS.DataAccessLayer.DataEntityModel;
using EMS.DataAccessLayer.Operations;

namespace EMS.DataAccessLayer.Operations
{
    public class CompetencyDA : ICompetencyDA
    {
        public int AddCompetency(CompetencyBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.Competency oData = new EMSEntity.Competency();
                oData.Competency1 = obj.Competency;
                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.Competencies.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteCompetency(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.Competencies.First(i => i.CompetencyId == id);
                objEF.Competencies.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<CompetencyBO> GetAllCompetency()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.Competencies
                        select new CompetencyBO
                        {
                            CompetencyId = oLoc.CompetencyId,
                            Competency = oLoc.Competency1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList();
            }
        }

        public CompetencyBO GetCompetencyById(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.Competencies
                        where oLoc.CompetencyId == id
                        select new CompetencyBO
                        {
                            CompetencyId = oLoc.CompetencyId,
                            Competency = oLoc.Competency1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdateCompetency(CompetencyBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.Competencies.First(i => i.CompetencyId == obj.CompetencyId);

                oData.Competency1 = obj.Competency;

                return objEF.SaveChanges();
            }
        }
    }
}
