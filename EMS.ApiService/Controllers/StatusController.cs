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
    public class StatusController : ApiController
    {
        private readonly IStatusBL _iStatusBL;
        public StatusController(IStatusBL iStatusBL)
        {
            this._iStatusBL = iStatusBL;
        }

        // GET api/values
        public IEnumerable<StatusBO> Get()
        {
            return _iStatusBL.GetAllStatus();
        }

        // GET api/values/5
        public StatusBO Get(int id)
        {
            return _iStatusBL.GetStatusById(id);
        }

        // POST api/values
        public int Post([FromBody]StatusBO value)
        {
            return _iStatusBL.AddStatus(value);
        }

        // PUT api/values/5
       [HttpPut]
        public int Put([FromBody]StatusBO value)
        {
            return _iStatusBL.UpdatStatus(value);
        }

        // DELETE api/values/5
        public int Delete(int id)
        {
            return _iStatusBL.DeleteStatus(id);
        }
    }
}
