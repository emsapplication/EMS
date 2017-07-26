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
    public class LocationController : ApiController
    {
        private readonly ILocationsBL _iLocationsBL;
        public LocationController(ILocationsBL iLocationsBL)
        {
            this._iLocationsBL = iLocationsBL;
        }

        // GET api/values
        public IEnumerable<LocationBO> Get()
        {
            return _iLocationsBL.GetAllLocations();
        }

        // GET api/values/5
        public LocationBO Get(int id)
        {
            return _iLocationsBL.GetLocationsById(id);
        }

        // POST api/values
        public int Post([FromBody]LocationBO value)
        {
            return _iLocationsBL.AddLocations(value);
        }

        // PUT api/values/5
        public int Put(int id, [FromBody]LocationBO value)
        {
            return _iLocationsBL.UpdateLocations(value);
        }

        // DELETE api/values/5
        public int Delete(int id)
        {
            return _iLocationsBL.DeleteLocations(id);
        }
    }
}
