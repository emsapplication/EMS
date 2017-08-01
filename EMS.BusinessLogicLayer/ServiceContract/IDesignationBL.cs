using EMS.BusinessObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface IDesignationBL
    {

        int AddDesignation(DesignationBO obj);

        int UpdateDesignation(DesignationBO obj);

        int DeleteDesignation(int leaveTypeid);

        List<DesignationBO> GetAllDesignation();

        DesignationBO GetDesignationById(int leaveTypeid);
    }
}
