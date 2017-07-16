using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMS.DataAccessLayer
{
    interface ICommonDataAccess<T>
    {
        int AddRecords(T obj);

        int UpdateRecords(T obj);

        List<T> GetAllRecords();

        T GetAllbyId(int id);

    }
}
