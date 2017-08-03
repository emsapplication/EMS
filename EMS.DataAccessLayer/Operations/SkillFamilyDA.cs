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
    public class SkillFamilyDA : ISkillFamilyDA
    {
        public int AddSkillFamily(SkillFamilyBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.SkillFamily oData = new EMSEntity.SkillFamily();
                oData.SkillFamily1 = obj.SkillFamily;
                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.SkillFamilies.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteSkillFamily(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.SkillFamilies.First(i => i.SkillFamilyId == id);
                objEF.SkillFamilies.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<SkillFamilyBO> GetAllSkillFamily()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.SkillFamilies
                        select new SkillFamilyBO
                        {
                            SkillFamilyId = oLoc.SkillFamilyId,
                            SkillFamily = oLoc.SkillFamily1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList();
            }
        }

        public SkillFamilyBO GetSkillFamilyById(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.SkillFamilies
                        where oLoc.SkillFamilyId == id
                        select new SkillFamilyBO
                        {
                            SkillFamilyId = oLoc.SkillFamilyId,
                            SkillFamily = oLoc.SkillFamily1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdatSkillFamily(SkillFamilyBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.SkillFamilies.First(i => i.SkillFamilyId == obj.SkillFamilyId);

                oData.SkillFamily1 = obj.SkillFamily;
                return objEF.SaveChanges();
            }
        }
    }
}
