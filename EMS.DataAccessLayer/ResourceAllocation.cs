namespace EMS.DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ResourceAllocation")]
    public partial class ResourceAllocation
    {
        public int ResourceAllocationId { get; set; }

        public int? ResourceDetailId { get; set; }

        public int? ProjectDetailId { get; set; }

        public int? DesignationId { get; set; }

        public int? ProjectRoleId { get; set; }

        [Column(TypeName = "date")]
        public DateTime? StartDate { get; set; }

        [Column(TypeName = "date")]
        public DateTime? EndDate { get; set; }

        public int? StatusId { get; set; }

        public int? HourPerDay { get; set; }

        public bool? IsInShift { get; set; }

        public int? ShiftDetailId { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public int? ModifiedBy { get; set; }

        public virtual ProjectDetail ProjectDetail { get; set; }

        public virtual ProjectRole ProjectRole { get; set; }

        public virtual ResourceDetail ResourceDetail { get; set; }

        public virtual ShiftDetail ShiftDetail { get; set; }

        public virtual Status Status { get; set; }
    }
}
