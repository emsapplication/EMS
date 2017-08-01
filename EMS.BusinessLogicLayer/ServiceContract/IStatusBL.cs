using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface IStatusBL
    {

        int AddStatus(StatusBO obj);

        int UpdatStatus(StatusBO obj);

        int DeleteStatus(int id);

        List<StatusBO> GetAllStatus();

        StatusBO GetStatusById(int id);
    }
}
