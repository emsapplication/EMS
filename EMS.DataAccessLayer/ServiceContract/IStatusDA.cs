using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface IStatusDA
    {

        int AddStatus(StatusBO obj);

        int UpdatStatus(StatusBO obj);

        int DeleteStatus(int id);

        List<StatusBO> GetAllStatus();

        StatusBO GetStatusById(int id);
    }
}
