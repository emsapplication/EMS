//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EMS.DataAccessLayer.DataEntityModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class Competency
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Competency()
        {
            this.Subcompetencies = new HashSet<Subcompetency>();
        }
    
        public int CompetencyId { get; set; }
        public Nullable<int> SkillFamilyId { get; set; }
        public string Competency1 { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> CreatedBy { get; set; }
    
        public virtual SkillFamily SkillFamily { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Subcompetency> Subcompetencies { get; set; }
    }
}
