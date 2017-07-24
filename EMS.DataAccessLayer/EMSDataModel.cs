namespace EMS.DataAccessLayer
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class EMSDataModel : DbContext
    {
        public EMSDataModel()
            : base("name=EMSDataModel")
        {
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

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AccountDetail>()
                .Property(e => e.AccountName)
                .IsUnicode(false);

            modelBuilder.Entity<Competency>()
                .Property(e => e.Competency1)
                .IsUnicode(false);

            modelBuilder.Entity<Designation>()
                .Property(e => e.DesignationName)
                .IsUnicode(false);

            modelBuilder.Entity<Designation>()
                .Property(e => e.ShortDesignation)
                .IsUnicode(false);

            modelBuilder.Entity<LeaveType>()
                .Property(e => e.LeaveType1)
                .IsUnicode(false);

            modelBuilder.Entity<Location>()
                .Property(e => e.Location1)
                .IsUnicode(false);

            modelBuilder.Entity<Location>()
                .Property(e => e.Description)
                .IsUnicode(false);

            modelBuilder.Entity<ProjectDetail>()
                .Property(e => e.ProjectID)
                .IsUnicode(false);

            modelBuilder.Entity<ProjectDetail>()
                .Property(e => e.ProjectDescription)
                .IsUnicode(false);

            modelBuilder.Entity<ProjectRole>()
                .Property(e => e.ProjectRole1)
                .IsUnicode(false);

            modelBuilder.Entity<ResourceDetail>()
                .Property(e => e.ResourceName)
                .IsUnicode(false);

            modelBuilder.Entity<ResourceDetail>()
                .Property(e => e.ExtNumber)
                .IsUnicode(false);

            modelBuilder.Entity<ShiftDetail>()
                .Property(e => e.ShiftDetail1)
                .IsUnicode(false);

            modelBuilder.Entity<SkillFamily>()
                .Property(e => e.SkillFamily1)
                .IsUnicode(false);

            modelBuilder.Entity<Status>()
                .Property(e => e.Status1)
                .IsUnicode(false);

            modelBuilder.Entity<Subcompetency>()
                .Property(e => e.SubCompetency1)
                .IsUnicode(false);

            modelBuilder.Entity<VacationDetail>()
                .Property(e => e.Reason)
                .IsUnicode(false);

            modelBuilder.Entity<Vertical>()
                .Property(e => e.VerticalName)
                .IsUnicode(false);
        }
    }
}
