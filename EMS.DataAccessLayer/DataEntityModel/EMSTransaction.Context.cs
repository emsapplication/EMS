﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class EMSEntities : DbContext
    {
        public EMSEntities()
            : base("name=EMSEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AccountDetail> AccountDetails { get; set; }
        public virtual DbSet<Competency> Competencies { get; set; }
        public virtual DbSet<Designation> Designations { get; set; }
        public virtual DbSet<LeaveType> LeaveTypes { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<ProjectDetail> ProjectDetails { get; set; }
        public virtual DbSet<ProjectRole> ProjectRoles { get; set; }
        public virtual DbSet<ResourceAllocation> ResourceAllocations { get; set; }
        public virtual DbSet<ResourceDetail> ResourceDetails { get; set; }
        public virtual DbSet<ShiftDetail> ShiftDetails { get; set; }
        public virtual DbSet<SkillFamily> SkillFamilies { get; set; }
        public virtual DbSet<Status> Status { get; set; }
        public virtual DbSet<Subcompetency> Subcompetencies { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<VacationDetail> VacationDetails { get; set; }
        public virtual DbSet<Vertical> Verticals { get; set; }
        public virtual DbSet<stg_ResourceDetail> stg_ResourceDetail { get; set; }
    }
}
