using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.Operations
{
    public class ShiftDetailBL : IShiftDetailBL
    {

        IShiftDetailDA oShiftDetail;
        public ShiftDetailBL()
        {
            oShiftDetail = new ShiftDetailDA();
        }

        public int AddShiftDetail(ShiftDetailBO obj)
        {
            return oShiftDetail.AddShiftDetail(obj);
        }

        public int DeleteShiftDetail(int id)
        {
            return oShiftDetail.DeleteShiftDetail(id);
        }

        public List<ShiftDetailBO> GetAllShiftDetail()
        {
            return oShiftDetail.GetAllShiftDetail();

        }

        public ShiftDetailBO GetShiftDetailById(int id)
        {
            return oShiftDetail.GetShiftDetailById(id);

        }

        public int UpdatShiftDetail(ShiftDetailBO obj)
        {
            return oShiftDetail.UpdatShiftDetail(obj);

        }
    }
}
