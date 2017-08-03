using EMS.DataAccessLayer.ServiceContract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EMS.BusinessObjects;
using EMSEntity = EMS.DataAccessLayer.DataEntityModel;
using EMS.BusinessLogicLayer.ServiceContract;
using EMS.DataAccessLayer.Operations;

namespace EMS.BusinessLogicLayer.Operations
{
    public class LeaveTypeBL : ILeaveTypeBL
    {

        ILeaveTypeDA oLeaveType;
        public LeaveTypeBL()
        {
            oLeaveType = new LeaveTypeDA();
        }

        public int AddLeaveType(LeaveTypeBO obj)
        {
            return oLeaveType.AddLeaveType(obj);
        }

        public int DeleteLeaveType(int leaveTypeid)
        {
            return oLeaveType.DeleteLeaveType(leaveTypeid);
        }

        public List<LeaveTypeBO> GetAllLeaveType()
        {
            return oLeaveType.GetAllLeaveType();
        }

        public LeaveTypeBO GetLeaveTypeById(int leaveTypeid)
        {
            return oLeaveType.GetLeaveTypeById(leaveTypeid);
        }

        public int UpdateLeaveType(LeaveTypeBO obj)
        {
            return oLeaveType.UpdateLeaveType(obj);
        }
    }
}
