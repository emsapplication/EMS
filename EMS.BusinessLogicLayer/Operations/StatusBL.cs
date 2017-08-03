using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.Operations
{
    public class StatusBL : IStatusBL
    {

        IStatusDA oStatus;
        public StatusBL()
        {
            oStatus = new StatusDA();
        }

        public int AddStatus(StatusBO obj)
        {
            return oStatus.AddStatus(obj);
        }

        public int DeleteStatus(int id)
        {
            return oStatus.DeleteStatus(id);
        }

        public List<StatusBO> GetAllStatus()
        {
            return oStatus.GetAllStatus();
        }

        public StatusBO GetStatusById(int id)
        {
            return oStatus.GetStatusById(id);
        }

        public int UpdatStatus(StatusBO obj)
        {
            return oStatus.UpdatStatus(obj);
        }
    }
}
