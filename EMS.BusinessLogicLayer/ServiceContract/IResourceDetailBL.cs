using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface IResourceDetailBL
    {

        int AddResourceDetail(ResourceDetailBO obj);

        int UpdatResourceDetail(ResourceDetailBO obj);

        int DeleteResourceDetail(int id);

        List<ResourceDetailBO> GetAllResourceDetail();

        ResourceDetailBO GetResourceDetailById(int id);
    }
}
