using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface IShiftDetailBL
    {

        int AddShiftDetail(ShiftDetailBO obj);

        int UpdatShiftDetail(ShiftDetailBO obj);

        int DeleteShiftDetail(int id);

        List<ShiftDetailBO> GetAllShiftDetail();

        ShiftDetailBO GetShiftDetailById(int id);
    }
}
