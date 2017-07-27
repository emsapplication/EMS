using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface ISkillFamilyDA
    {

        int AddSkillFamily(SkillFamilyBO obj);

        int UpdatSkillFamily(SkillFamilyBO obj);

        int DeleteSkillFamily(int id);

        List<SkillFamilyBO> GetAllSkillFamily();

        SkillFamilyBO GetSkillFamilyById(int id);
    }
}
