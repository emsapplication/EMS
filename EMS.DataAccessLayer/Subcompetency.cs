namespace EMS.DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Subcompetency")]
    public partial class Subcompetency
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Subcompetency()
        {
            ResourceDetails = new HashSet<ResourceDetail>();
        }

        public int SubcompetencyId { get; set; }

        public int? CompetencyId { get; set; }

        [Column("SubCompetency")]
        [StringLength(50)]
        public string SubCompetency1 { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public virtual Competency Competency { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ResourceDetail> ResourceDetails { get; set; }
    }
}
