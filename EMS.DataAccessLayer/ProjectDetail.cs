namespace EMS.DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ProjectDetail")]
    public partial class ProjectDetail
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ProjectDetail()
        {
            ResourceAllocations = new HashSet<ResourceAllocation>();
        }

        public int ProjectDetailId { get; set; }

        public int? AccountDetailId { get; set; }

        [StringLength(20)]
        public string ProjectID { get; set; }

        [StringLength(100)]
        public string ProjectDescription { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int? StatusId { get; set; }

        public int? CGIProjectManager { get; set; }

        public int? OnsiteProjectManager { get; set; }

        public int? ReportingManager { get; set; }

        public int? EDName { get; set; }

        public int? GHName { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public int? ModifiedBy { get; set; }

        public virtual AccountDetail AccountDetail { get; set; }

        public virtual Status Status { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ResourceAllocation> ResourceAllocations { get; set; }
    }
}
