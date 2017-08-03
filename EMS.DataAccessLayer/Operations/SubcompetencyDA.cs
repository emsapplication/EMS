using EMS.DataAccessLayer.ServiceContract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EMS.BusinessObjects;
using EMSEntity = EMS.DataAccessLayer.DataEntityModel;

namespace EMS.DataAccessLayer.Operations
{
    public class SubcompetencyDA : ISubcompetencyDA
    {
        public int AddSubcompetencyDetails(SubcompetencyBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.Subcompetency oData = new EMSEntity.Subcompetency();
                oData.CompetencyId = obj.CompetencyId;
                oData.SubCompetency1 = obj.SubCompetency;
                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.Subcompetencies.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteSubcompetencyDetails(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.Subcompetencies.First(i => i.SubcompetencyId == id);
                objEF.Subcompetencies.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<SubcompetencyBO> GetAllSubcompetencyDetails()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from obj in objEF.Subcompetencies
                        select new SubcompetencyBO
                        {
                            SubcompetencyId = obj.SubcompetencyId,
                            SubCompetency = obj.SubCompetency1,
                            CompetencyId = obj.CompetencyId,
                            CreatedBy = obj.CreatedBy,
                            CreatedDate = obj.CreatedDate
                        }).ToList();
            }
        }

        public SubcompetencyBO GetSubcompetencyDetailsById(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from obj in objEF.Subcompetencies
                        where obj.SubcompetencyId == id
                        select new SubcompetencyBO
                        {
                            SubcompetencyId = obj.SubcompetencyId,
                            SubCompetency = obj.SubCompetency1,
                            CompetencyId = obj.CompetencyId,
                            CreatedBy = obj.CreatedBy,
                            CreatedDate = obj.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdatSubcompetencyDetails(SubcompetencyBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.Subcompetencies.First(i => i.SubcompetencyId == obj.SubcompetencyId);

                oData.CompetencyId = obj.CompetencyId;
                oData.SubCompetency1 = obj.SubCompetency;
                return objEF.SaveChanges();
            }
        }
    }
}
