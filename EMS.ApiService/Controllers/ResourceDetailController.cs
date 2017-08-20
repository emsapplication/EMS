using EMS.BusinessLogicLayer.Operations;
using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EMS.ApiService.Controllers
{
    public class ResourceDetailController : ApiController
    {
        private readonly IResourceDetailBL _iResourceDetailBL;
        public ResourceDetailController(IResourceDetailBL iDesignationBL)
        {
            this._iResourceDetailBL = iDesignationBL;
        }

        // GET api/values
        public IEnumerable<ResourceDetailBO> Get()
        {
            return _iResourceDetailBL.GetAllResourceDetail();
        }

        // GET api/values/5
        public ResourceDetailBO Get(int id)
        {
            return _iResourceDetailBL.GetResourceDetailById(id);
        }

        // POST api/values
        public int Post([FromBody]ResourceDetailBO value)
        {
            return _iResourceDetailBL.AddResourceDetail(value);
        }

        // PUT api/values/5
       [HttpPut]
        public int Put([FromBody]ResourceDetailBO value)
        {
            return _iResourceDetailBL.UpdatResourceDetail(value);
        }

        // DELETE api/values/5
        public int Delete(int id)
        {
            return _iResourceDetailBL.DeleteResourceDetail(id);
        }

        // DELETE api/values/5
       
        [HttpPost]
        public void ImportUserDetail(string value)
        {
            string str = value;
        }
    }
}
