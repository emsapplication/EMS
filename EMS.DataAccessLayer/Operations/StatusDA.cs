﻿using EMS.DataAccessLayer.ServiceContract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EMS.BusinessObjects;
using EMSEntity = EMS.DataAccessLayer.DataEntityModel;

namespace EMS.DataAccessLayer.Operations
{
    public class StatusDA : IStatusDA
    {
        public int AddStatus(StatusBO obj)
        {
            throw new NotImplementedException();
        }

        public int DeleteStatus(int id)
        {
            throw new NotImplementedException();
        }

        public List<StatusBO> GetAllStatus()
        {
            throw new NotImplementedException();
        }

        public StatusBO GetStatusById(int id)
        {
            throw new NotImplementedException();
        }

        public int UpdatStatus(StatusBO obj)
        {
            throw new NotImplementedException();
        }
    }
}