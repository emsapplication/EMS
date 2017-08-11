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
    public class DesignationController : ApiController
    {
        private readonly IDesignationBL _iDesignationBL;
        public DesignationController(IDesignationBL iDesignationBL)
        {
            this._iDesignationBL = iDesignationBL;
        }

        // GET api/values
        public IEnumerable<DesignationBO> Get()
        {
            return _iDesignationBL.GetAllDesignation();
        }

        // GET api/values/5
        public DesignationBO Get(int id)
        {
            return _iDesignationBL.GetDesignationById(id);
        }

        // POST api/values
        public int Post([FromBody]DesignationBO value)
        {
            return _iDesignationBL.AddDesignation(value);
        }

        // PUT api/values/5
       [HttpPut]
        public int Put([FromBody]DesignationBO value)
        {
            return _iDesignationBL.UpdateDesignation(value);
        }

        // DELETE api/values/5
        public int Delete(int id)
        {
            return _iDesignationBL.DeleteDesignation(id);
        }
    }
}
