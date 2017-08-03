using System;

namespace EMS.BusinessObjects
{
    public class ResourceDetailBO : BaseBO
    { 

        public int ResourceDetailId { get; set; }

        public int? PSAId { get; set; }

        public string ResourceName { get; set; }

        public DateTime? CGIDateOfJoin { get; set; }

        public DateTime? CareerStartDate { get; set; }

        public int? LocationId { get; set; }

        public int? SkillFamilyId { get; set; }

        public int? CompentencyId { get; set; }

        public int? SubcompetencyId { get; set; }

        public int? StatusId { get; set; }

        public string ExtNumber { get; set; }

        public int? DesignationId { get; set; }

    }
}
