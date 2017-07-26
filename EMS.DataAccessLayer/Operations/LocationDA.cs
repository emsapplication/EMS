using EMS.DataAccessLayer.ServiceContract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EMS.BusinessObjects;
using EMSEntity = EMS.DataAccessLayer.DataEntityModel;

namespace EMS.DataAccessLayer.Operations
{
    public class LocationDA : ILocationsDA
    {

        /// <summary>
        /// Adding the location details
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public int AddLocations(LocationBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.Location oData = new EMSEntity.Location();
                oData.Location1 = obj.Location;
                oData.Description = obj.Description;
                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.Locations.Add(oData);

                return objEF.SaveChanges();
            }
        }

        /// <summary>
        /// delete locations
        /// </summary>
        /// <param name="locationid"></param>
        /// <returns></returns>
        public int DeleteLocations(int locationid)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.Locations.First(i => i.LocationId == locationid);
                objEF.Locations.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }


        /// <summary>
        ///  get details of all locations
        /// </summary>
        /// <returns></returns>
        public List<LocationBO> GetAllLocations()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.Locations
                        select new LocationBO
                        {
                            LocationId = oLoc.LocationId,
                            Location = oLoc.Location1,
                            Description = oLoc.Description,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList();
            }
        }



        /// <summary>
        ///  get location by ID
        /// </summary>
        /// <param name="locationid"></param>
        /// <returns></returns>
        public LocationBO GetLocationsById(int locationid)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.Locations
                        where oLoc.LocationId == locationid
                        select new LocationBO
                        {
                            LocationId = oLoc.LocationId,
                            Location = oLoc.Location1,
                            Description = oLoc.Description,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }



        /// <summary>
        /// Update the location details
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public int UpdateLocations(LocationBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.Locations.First(i => i.LocationId == obj.LocationId);

                oData.Location1 = obj.Location;
                oData.Description = obj.Description;
               
                return objEF.SaveChanges();
            }
        }
    }
}
