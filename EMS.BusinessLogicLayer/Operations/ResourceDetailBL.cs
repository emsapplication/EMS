using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.Operations
{
    public class ResourceDetailBL : IResourceDetailBL
    {

        IResourceDetailDA oResourceDetail;
        public ResourceDetailBL()
        {
            oResourceDetail = new ResourceDetailDA();
        }

        public int AddResourceDetail(ResourceDetailBO obj)
        {
            return oResourceDetail.AddResourceDetail(obj);
        }

        public int DeleteResourceDetail(int id)
        {
            return oResourceDetail.DeleteResourceDetail(id);
        }

        public List<ResourceDetailBO> GetAllResourceDetail()
        {
            return oResourceDetail.GetAllResourceDetail();
        }

        public ResourceDetailBO GetResourceDetailById(int id)
        {
            return oResourceDetail.GetResourceDetailById(id);
        }

        public int UpdatResourceDetail(ResourceDetailBO obj)
        {
            return oResourceDetail.UpdatResourceDetail(obj);
        }
    }
}
