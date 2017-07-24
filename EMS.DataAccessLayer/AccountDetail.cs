namespace EMS.DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("AccountDetail")]
    public partial class AccountDetail
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AccountDetail()
        {
            ProjectDetails = new HashSet<ProjectDetail>();
        }

        public int AccountDetailId { get; set; }

        [StringLength(50)]
        public string AccountName { get; set; }

        [Column(TypeName = "date")]
        public DateTime? StartDate { get; set; }

        public int? StatusId { get; set; }

        [Column(TypeName = "date")]
        public DateTime? EndDate { get; set; }

        public int? VerticalId { get; set; }

        public int? Director { get; set; }

        public int? SDM { get; set; }

        public int? PM { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public int? ModifiedBy { get; set; }

        public virtual Status Status { get; set; }

        public virtual Vertical Vertical { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ProjectDetail> ProjectDetails { get; set; }
    }
}
