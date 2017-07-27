using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface IVerticalsDA
    {

        int AddVerticals(VerticalsBO obj);

        int UpdateVerticals(VerticalsBO obj);

        int DeleteVerticals(int id);

        List<VerticalsBO> GetAllVerticals();

        VerticalsBO GetVerticalsById(int id);
    }
}
