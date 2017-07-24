namespace EMS.DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class VacationDetail
    {
        public int VacationDetailId { get; set; }

        public int? ResourceDetailId { get; set; }

        public DateTime? VacationDate { get; set; }

        public int? LeaveTypeId { get; set; }

        public bool? IsPlanned { get; set; }

        public bool? IsBillable { get; set; }

        public bool? IsApproved { get; set; }

        public int? Approvedby { get; set; }

        public DateTime? ApprovedOn { get; set; }

        [StringLength(100)]
        public string Reason { get; set; }

        public int? Status { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public int? ModifiedBy { get; set; }

        public virtual LeaveType LeaveType { get; set; }

        public virtual ResourceDetail ResourceDetail { get; set; }
    }
}
