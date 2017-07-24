namespace EMS.DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ResourceDetail")]
    public partial class ResourceDetail
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ResourceDetail()
        {
            ResourceAllocations = new HashSet<ResourceAllocation>();
            VacationDetails = new HashSet<VacationDetail>();
        }

        public int ResourceDetailId { get; set; }

        public int? PSAId { get; set; }

        [StringLength(50)]
        public string ResourceName { get; set; }

        [Column(TypeName = "date")]
        public DateTime? CGIDateOfJoin { get; set; }

        [Column(TypeName = "date")]
        public DateTime? CareerStartDate { get; set; }

        public int? LocationId { get; set; }

        public int? SkillFamilyId { get; set; }

        public int? CompentencyId { get; set; }

        public int? SubcompetencyId { get; set; }

        public int? StatusId { get; set; }

        [StringLength(10)]
        public string ExtNumber { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public int? ModifiedBy { get; set; }

        public int? DesignationId { get; set; }

        public virtual Designation Designation { get; set; }

        public virtual Location Location { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ResourceAllocation> ResourceAllocations { get; set; }

        public virtual Status Status { get; set; }

        public virtual Subcompetency Subcompetency { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<VacationDetail> VacationDetails { get; set; }
    }
}
