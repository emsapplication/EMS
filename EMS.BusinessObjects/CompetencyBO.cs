using System;

namespace EMS.BusinessObjects
{
    public class CompetencyBO : BaseBO
    {

        public int CompetencyId { get; set; }

        public int SkillFamilyId { get; set; }

        public string Competency { get; set; }

    }
}
