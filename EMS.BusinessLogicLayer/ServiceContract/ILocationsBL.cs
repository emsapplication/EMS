using EMS.BusinessObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface ILocationsBL
    {

        int AddLocations(LocationBO obj);

        int UpdateLocations(LocationBO obj);

        int DeleteLocations(int locid);

        List<LocationBO> GetAllLocations();

        LocationBO GetLocationsById(int locid);
    }
}
