namespace EMS.DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Competency")]
    public partial class Competency
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Competency()
        {
            Subcompetencies = new HashSet<Subcompetency>();
        }

        public int CompetencyId { get; set; }

        public int? SkillFamilyId { get; set; }

        [Column("Competency")]
        [StringLength(50)]
        public string Competency1 { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public virtual SkillFamily SkillFamily { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Subcompetency> Subcompetencies { get; set; }
    }
}
