using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;
using System;

namespace EMS.BusinessLogicLayer.Operations
{
    public class ImportRecordBL : IImportRecordBL
    {

        IImportRecordDA oImportRecords;
        public ImportRecordBL()
        {
            oImportRecords = new ImportRecordDA();
        }

        public int ImportResourceData()
        {
            return oImportRecords.ImportResourceData();
        }

        public int LoadResourceData(List<StageResourecDetailBO> resorceDetail)
        {
            oImportRecords.DeleteExistRecords();
            return oImportRecords.LoadResourceData(resorceDetail);
        }
    }
}
