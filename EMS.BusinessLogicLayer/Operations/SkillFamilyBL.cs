using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.Operations
{
    public class SkillFamilyBL : ISkillFamilyBL
    {

        ISkillFamilyDA oSkillFamily;
        public SkillFamilyBL()
        {
            oSkillFamily = new SkillFamilyDA();
        }

        public int AddSkillFamily(SkillFamilyBO obj)
        {
            return oSkillFamily.AddSkillFamily(obj);
        }

        public int DeleteSkillFamily(int id)
        {
            return oSkillFamily.DeleteSkillFamily(id);
        }

        public List<SkillFamilyBO> GetAllSkillFamily()
        {
            return oSkillFamily.GetAllSkillFamily();
        }

        public SkillFamilyBO GetSkillFamilyById(int id)
        {
            return oSkillFamily.GetSkillFamilyById(id);

        }

        public int UpdatSkillFamily(SkillFamilyBO obj)
        {
            return oSkillFamily.UpdatSkillFamily(obj);
        }
    }
}
