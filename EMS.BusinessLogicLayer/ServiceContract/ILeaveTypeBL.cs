using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface ILeaveTypeBL
    {

        int AddLeaveType(LeaveTypeBO obj);

        int UpdateLeaveType(LeaveTypeBO obj);

        int DeleteLeaveType(int leaveTypeid);

        List<LeaveTypeBO> GetAllLeaveType();

        LeaveTypeBO GetLeaveTypeById(int leaveTypeid);

    }
}
