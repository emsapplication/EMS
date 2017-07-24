using EMS.BusinessObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMS.DataAccessLayer
{
    interface ILocationService
    {
        int AddLocation(Location obj);

        int UpdateRecords(Location obj);

        List<Location> GetAllRecords();

        Location GetAllbyId(int id);

    }
}
