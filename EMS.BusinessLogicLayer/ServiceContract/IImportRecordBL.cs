using EMS.BusinessObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface IImportRecordBL
    {
        int LoadResourceData(List<StageResourecDetailBO> resorceDetail );

        int ImportResourceData();

    }
}
