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
    
    public partial class ProjectDetail
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ProjectDetail()
        {
            this.ResourceAllocations = new HashSet<ResourceAllocation>();
        }
    
        public int ProjectDetailId { get; set; }
        public Nullable<int> AccountDetailId { get; set; }
        public string ProjectID { get; set; }
        public string ProjectDescription { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<int> StatusId { get; set; }
        public Nullable<int> CGIProjectManager { get; set; }
        public Nullable<int> OnsiteProjectManager { get; set; }
        public Nullable<int> ReportingManager { get; set; }
        public Nullable<int> EDName { get; set; }
        public Nullable<int> GHName { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
    
        public virtual AccountDetail AccountDetail { get; set; }
        public virtual Status Status { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ResourceAllocation> ResourceAllocations { get; set; }
    }
}