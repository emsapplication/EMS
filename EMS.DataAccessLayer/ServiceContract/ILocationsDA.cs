using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface ILocationsDA
    {

        int AddLocations(LocationBO obj);

        int UpdateLocations(LocationBO obj);

        int DeleteLocations(int leaveTypeid);

        List<LocationBO> GetAllLocations();

        LocationBO GetLocationsById(int leaveTypeid);
    }
}
