using EMS.BusinessObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface IImportRecordDA
    {
        int LoadResourceData(List<StageResourecDetailBO> resorceDetail );

        int DeleteExistRecords();

        int ImportResourceData();

    }
}
