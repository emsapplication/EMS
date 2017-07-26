using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.Operations
{
    public class LocationsBL : ILocationsBL
    {

        ILocationsDA oLocation;
        public  LocationsBL()
        {
            oLocation = new LocationDA();
        }


        /// <summary>
        /// Add the location dtails
        /// </summary>
        /// <param name="objLoc"></param>
        /// <returns></returns>
        public int AddLocations(LocationBO objLoc)
        {
            return oLocation.AddLocations(objLoc);
        }


        /// <summary>
        /// Delete the location details
        /// </summary>
        /// <param name="locId"></param>
        /// <returns></returns>
        public int DeleteLocations(int locId)
        {
            return oLocation.DeleteLocations(locId);
        }


        /// <summary>
        /// Get all locations
        /// </summary>
        /// <returns></returns>
        public List<LocationBO> GetAllLocations()
        {
            return oLocation.GetAllLocations();
        }


        /// <summary>
        ///  get Location by Id
        /// </summary>
        /// <param name="locId"></param>
        /// <returns></returns>
        public LocationBO GetLocationsById(int locId)
        {
            return oLocation.GetLocationsById(locId);
        }


        /// <summary>
        /// Update locations
        /// </summary>
        /// <param name="objLoc"></param>
        /// <returns></returns>
        public int UpdateLocations(LocationBO objLoc)
        {
            return oLocation.UpdateLocations(objLoc);
        }
    }
}
