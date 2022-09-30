using System.ComponentModel.DataAnnotations;

namespace EndPoint.Entities.Common
{
    public interface IEntity
    {
    }

    public abstract class AuditableEntity<TKey>
    {
        [Key]
        public TKey Id { get; set; }

        public string CreatedBy { get; set; } = string.Empty;

        public DateTime CreatedOn { get => DateTime.Now; }

        public string? ModifiedBy { get; set; }

        public DateTime? ModifiedOn { get => DateTime.Now; }
    }

    public class AuditableEntity: AuditableEntity<int>
    {

    }
}
