using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface IResourceDetailDA
    {

        int AddResourceDetail(ResourceDetailBO obj);

        int UpdatResourceDetail(ResourceDetailBO obj);

        int DeleteResourceDetail(int id);

        List<ResourceDetailBO> GetAllResourceDetail();

        ResourceDetailBO GetResourceDetailById(int id);
    }
}
