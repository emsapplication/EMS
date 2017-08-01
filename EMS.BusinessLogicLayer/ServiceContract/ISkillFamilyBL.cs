using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface ISkillFamilyBL
    {

        int AddSkillFamily(SkillFamilyBO obj);

        int UpdatSkillFamily(SkillFamilyBO obj);

        int DeleteSkillFamily(int id);

        List<SkillFamilyBO> GetAllSkillFamily();

        SkillFamilyBO GetSkillFamilyById(int id);
    }
}
