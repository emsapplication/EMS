using System;

namespace EMS.BusinessObjects
{
    public class ProjectDetailBO : BaseBO
    {
        public int ProjectDetailId { get; set; }

        public int AccountDetailId { get; set; }

        public string ProjectID { get; set; }

        public string ProjectDescription { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public int StatusId { get; set; }

        public int CGIProjectManager { get; set; }

        public int OnsiteProjectManager { get; set; }

        public int ReportingManager { get; set; }

        public int EDName { get; set; }

        public int GHName { get; set; }

    }
}
